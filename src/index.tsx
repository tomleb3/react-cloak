import { useState, useEffect } from "react";

export default function Cloak({
  onOffline,
  onOnline,
  renderWhen = "offline",
  children,
}: {
  onOffline?: () => void;
  onOnline?: () => void;
  renderWhen?: "online" | "offline";
  children: JSX.Element;
}) {
  const isOffline = useCloak({ onOffline, onOnline });

  if (renderWhen === "online") {
    return isOffline ? null : children;
  }
  return isOffline ? children : null;
}

export function useCloak(params?: {
  onOffline?: () => void;
  onOnline?: () => void;
}): boolean {
  const [isOffline, setIsOffline] = useState<boolean>(false);

  const offline = () => {
    setIsOffline(true);
    if (params?.onOffline !== undefined) {
      params?.onOffline;
    }
  };

  const online = () => {
    setIsOffline(false);
    if (params?.onOffline !== undefined) {
      params?.onOffline;
    }
  };

  useEffect(() => {
    window.addEventListener("online", online);
    window.addEventListener("offline", offline);
    return () => {
      window.removeEventListener("online", online);
      window.removeEventListener("offline", offline);
    };
  }, []);

  return isOffline;
}
