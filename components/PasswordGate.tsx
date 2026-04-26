"use client";

import { ArrowRightIcon } from "@radix-ui/react-icons";
import { useEffect, useRef, useState } from "react";

const SESSION_KEY = "portfolio_unlocked";

export default function PasswordGate({
  correctPassword,
  children,
}: {
  correctPassword: string;
  children: React.ReactNode;
}) {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [viewportStyle, setViewportStyle] = useState<React.CSSProperties>({});
  const inputRef = useRef<HTMLInputElement>(null);
  const uiRef = useRef<HTMLDivElement>(null);


  // 初始化时检查 sessionStorage
  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY) === "true") {
      setIsUnlocked(true);
    }
  }, []);

  // 追踪 visual viewport，使内容在 navbar 与键盘/footer 之间保持垂直居中（仅手机端）
  useEffect(() => {
    const vv = window.visualViewport;
    if (!vv) return;
    const update = () => {
      if (window.innerWidth >= 640) {
        setViewportStyle({});
        return;
      }
      const navH = 94;
      const footerH = 64;
      const kbH = Math.max(0, window.innerHeight - vv.offsetTop - vv.height);
      setViewportStyle({
        top: `${vv.offsetTop + navH}px`,
        bottom: `${Math.max(footerH, kbH)}px`,
      });
    };
    update();
    vv.addEventListener("resize", update);
    vv.addEventListener("scroll", update);
    return () => {
      vv.removeEventListener("resize", update);
      vv.removeEventListener("scroll", update);
    };
  }, []);

  // 锁定时禁止滚动（iOS 兼容方案：position fixed + 记录恢复 scrollY）
  useEffect(() => {
    if (isUnlocked) return;
    const scrollY = window.scrollY;
    const body = document.body;
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.overflow = "hidden";
    return () => {
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.overflow = "";
      window.scrollTo(0, scrollY);
    };
  }, [isUnlocked]);

  const handleSubmit = () => {
    if (input === correctPassword) {
      setError(false);
      setIsAnimatingOut(true);
    } else {
      setError(true);
      setInput("");
      inputRef.current?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    } else if (e.key === "Backspace") {
      e.preventDefault();
      setInput((prev) => prev.slice(0, -1));
    } else if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
      e.preventDefault();
      setInput((prev) => prev + e.key);
    }
  };

  const handleTransitionEnd = () => {
    if (isAnimatingOut) {
      sessionStorage.setItem(SESSION_KEY, "true");
      setIsUnlocked(true);
    }
  };

  const showOverlay = !isUnlocked;

  return (
    <div>
      {/* 底层内容：锁定时不可交互，解锁后恢复正常 */}
      <div className={showOverlay ? "pointer-events-none select-none" : ""}>{children}</div>

      {showOverlay && (
        <div
          className="fixed left-0 right-0 top-[94px] sm:top-[157px] bottom-16 sm:bottom-8 overflow-hidden"
          style={{
            transition: "opacity 0.7s ease-in-out",
            opacity: isAnimatingOut ? 0 : 1,
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          <div
            className="absolute inset-0"
            style={{
              background: "#FFFFFFB2",
              backdropFilter: "blur(50px)",
              WebkitBackdropFilter: "blur(50px)",
            }}
          />
        </div>
      )}

      {/* 输入框 UI：fixed 居中 */}
      {showOverlay && (
        <div
          className="fixed left-0 right-0 top-[94px] sm:top-0 bottom-16 sm:bottom-0 flex flex-col items-center justify-center px-4 sm:px-[10px] pointer-events-none"
          style={{
            transition: "opacity 0.7s ease-in-out",
            opacity: isAnimatingOut ? 0 : 1,
            ...viewportStyle,
          }}
        >
          <p className="text-xs mb-[35px] w-[265px] sm:w-[431px] text-center break-words">
            This project is confidential.
            <br className="sm:hidden" />
            Enter password to view :-)
          </p>

          <div
            className="flex items-center border border-foreground/30 w-[265px] sm:w-[431px] pointer-events-auto bg-white"
            style={{
              animation: error ? "shake 0.35s ease" : undefined,
            }}
            onAnimationEnd={() => setError(false)}
          >
            <input
              ref={inputRef}
              type="text"
              autoComplete="off"
              value={"*".repeat(input.length)}
              onChange={() => { }}
              onKeyDown={handleKeyDown}
              autoFocus
              className="flex-1 min-w-0 text-xs px-[10px] py-[15px] outline-none"
              onFocus={() => {
                const meta = document.querySelector('meta[name="viewport"]');
                if (meta) meta.setAttribute("content", "width=device-width, initial-scale=1, maximum-scale=1");
              }}
              onBlur={() => {
                const meta = document.querySelector('meta[name="viewport"]');
                if (meta) meta.setAttribute("content", "width=device-width, initial-scale=1");
              }}
              placeholder={error ? "incorrect password" : ""}
            />
            <button onClick={handleSubmit} className="group px-[10px] py-[15px]">
              <ArrowRightIcon className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-[2px]" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
