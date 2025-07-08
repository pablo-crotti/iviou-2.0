import { useEffect } from "react";
import { CheckCircle2, CircleX, Info } from "lucide-react";

export type AlertType = "success" | "error" | "info";

export interface AlertItem {
  id: number;
  title: string;
  text: string;
  type: AlertType;
}

interface AlertProps {
  alerts: AlertItem[];
  setAlerts: React.Dispatch<React.SetStateAction<AlertItem[]>>;
}

const Alert = ({ alerts, setAlerts }: AlertProps) => {
  useEffect(() => {
    const timers = alerts.map((alert) =>
      setTimeout(() => {
        setAlerts((prev) => prev.filter((a) => a.id !== alert.id));
      }, 5000)
    );

    return () => {
      timers.forEach(clearTimeout);
    };
  }, [alerts, setAlerts]);

  return (
    <div className="fixed z-50 top-4 right-4 flex flex-col gap-4">
      {alerts.map((alert) => (
        <div
          key={alert.id}
          className={`
            border-t-2 rounded-lg p-4 transition-all duration-300 animate-fade-in
            ${
              alert.type === "success"
                ? "bg-teal-800 border-teal-500"
                : alert.type === "error"
                ? "bg-red-800 border-red-500"
                : "bg-blue-800 border-blue-500"
            }
          `}
          role="alert"
        >
          <div className="flex">
            {alert.type === "success" ? (
              <CheckCircle2 className="text-teal-400" />
            ) : alert.type === "error" ? (
              <CircleX className="text-red-400" />
            ) : (
              <Info className="text-blue-400" />
            )}
            <div className="ms-3">
              <h3 className="text-white font-semibold">{alert.title}</h3>
              <p className="text-sm text-neutral-200">{alert.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Alert;
