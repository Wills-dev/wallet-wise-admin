export const toastOptions = {
  duration: 6000,
  style: {
    background: "#353434",
    color: "#fff",
  },
};

export const formatNumber = (amount) => {
  if (amount < 1000) {
    return amount.toString();
  } else if (amount < 1000000) {
    return (amount / 1000).toFixed(amount % 1000 === 0 ? 0 : 1) + "k";
  } else if (amount < 1000000000) {
    return (amount / 1000000).toFixed(amount % 1000000 === 0 ? 0 : 1) + "m";
  } else if (amount < 1000000000000) {
    return (
      (amount / 1000000000).toFixed(amount % 1000000000 === 0 ? 0 : 1) + "b"
    );
  } else {
    return (
      (amount / 1000000000000).toFixed(amount % 1000000000000 === 0 ? 0 : 1) +
      "t"
    );
  }
};

export function formatDuration(days) {
  if (days < 0) {
    return "Invalid input";
  }
  if (days < 31) {
    return days === 1 ? "1 day" : `${days} days`;
  }
  const months = Math.floor(days / 30);
  if (months < 12) {
    return months === 1 ? "1 month" : `${months} months`;
  }
  const years = Math.floor(months / 12);
  return years === 1 ? "1 year" : `${years} years`;
}
