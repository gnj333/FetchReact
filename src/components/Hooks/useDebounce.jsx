import { useState, useEffect } from 'react';

export function useDebounce(value, delay = 1000) {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);
        return () => {
            clearTimeout(timeout);
        };
    }, [value, delay]);

    return debouncedValue;
}