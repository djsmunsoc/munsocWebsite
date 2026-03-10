import React, { useState, useEffect } from "react";

/**
 * CountdownTimer Component
 *
 * A reusable countdown timer that displays days, hours, and minutes until a target date.
 *
 * Props:
 *   - targetDate (string or Date): The target date for countdown (e.g., "2026-03-28" or new Date(2026, 2, 28))
 *   - showSeconds (boolean): Optional - set to true to also display seconds (default: false)
 *   - containerClass (string): Optional - custom Tailwind classes for the container
 *   - labelClass (string): Optional - custom Tailwind classes for labels
 *   - numberClass (string): Optional - custom Tailwind classes for numbers
 *
 * Example Usage:
 *   <CountdownTimer targetDate="2026-03-28" />
 *   <CountdownTimer targetDate="2026-03-28" showSeconds={true} />
 */

const CountdownTimer = ({
  targetDate,
  showSeconds = false,
  containerClass = "",
  labelClass = "",
  numberClass = "",
}) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const target = new Date(targetDate).getTime();
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({
          days,
          hours,
          minutes,
          seconds,
        });
      } else {
        // Countdown finished
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    };

    // Calculate immediately on mount
    calculateTimeLeft();

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const defaultContainerClass =
    "flex justify-center items-center gap-8 flex-wrap px-4 py-6";
  const defaultLabelClass = "text-sm lg:text-xl font-semibold text-gray-300 mt-2";
  const defaultNumberClass = "text-4xl lg:text-6xl font-bold text-white mb-1";

  const TimeUnit = ({ number, label }) => (
    <div className="flex flex-col items-center">
      <div className={numberClass || defaultNumberClass}>
        {String(number).padStart(2, "0")}
      </div>
      <div className={labelClass || defaultLabelClass}>{label}</div>
    </div>
  );

  return (
    <div className={containerClass || defaultContainerClass}>
      <TimeUnit number={timeLeft.days} label="Days" />
      <TimeUnit number={timeLeft.hours} label="Hours" />
      <TimeUnit number={timeLeft.minutes} label="Minutes" />
      {showSeconds && <TimeUnit number={timeLeft.seconds} label="Seconds" />}
    </div>
  );
};

export default CountdownTimer;
