export function formatTimestamp(timestamp: Date): string {
    const date = new Date(timestamp);
    const now = new Date();

    // Calculate the time difference in milliseconds
    const timeDiff = now.getTime() - date.getTime();
    const secondsDiff = Math.floor(timeDiff / 1000);
    const minutesDiff = Math.floor(secondsDiff / 60);
    const hoursDiff = Math.floor(minutesDiff / 60);
    const daysDiff = Math.floor(hoursDiff / 24);

    // If the timestamp is within the last 24 hours
    if (daysDiff === 0 && now.getDate() === date.getDate()) {
        if (hoursDiff === 0) {
            return `${minutesDiff} minutes ago`;
        } else {
            return `${hoursDiff} hours ago`;
        }
    }
    // If the timestamp is yesterday
    else if (daysDiff === 1) {
        const options: Intl.DateTimeFormatOptions = { hour: 'numeric', minute: 'numeric', hour12: true };
        return 'Yesterday ' + date.toLocaleTimeString('en-US', options);
    }
    // If the timestamp is within the last week
    else if (daysDiff < 7) {
        const days: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const day: string = days[date.getDay()];
        const options: Intl.DateTimeFormatOptions = { hour: 'numeric', minute: 'numeric', hour12: true };
        return `${day} ${date.toLocaleTimeString('en-US', options)}`;
    }
    // If the timestamp is more than a week ago
    else {
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit', hour: 'numeric', minute: 'numeric', hour12: true };
        return date.toLocaleDateString('en-US', options);
    }
}
