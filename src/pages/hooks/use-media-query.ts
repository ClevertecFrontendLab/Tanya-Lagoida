import {useCallback, useEffect, useState} from 'react';

export const useMediaQuery = (query: string): boolean => {
    const getMatches = useCallback((mediaQuery: string): boolean => window.matchMedia(mediaQuery).matches,[]);
    const [matches, setMatches] = useState<boolean>(getMatches(query));

    const handleChange = useCallback(() => setMatches(getMatches(query)),[getMatches, query]);

    useEffect(() => {
        const matchMedia = window.matchMedia(query);

        handleChange();
        matchMedia.addEventListener('change', handleChange);

        return () => matchMedia.removeEventListener('change', handleChange);
    }, [handleChange, query]);

    return matches;
};
