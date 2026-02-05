import { useState } from "react";
import { SearchHelper } from '/src/Components/Navbar/SearchLogic/SearchHelper'

export function useSearchLogic(products) {
    const [searchText, setSearchText] = useState('');
    const [hasTyped, setHasTyped] = useState(false);
    const [searchStatus, setSearchStatus] = useState('idle');
    const [isLoading, setIsLoading] = useState(false);
    const [suggestions, setSuggestions] = useState([]);
    const [results, setResults] = useState([]);

    const updateSearchText = (value) => {
        setSearchText(value);

        if (value.trim() === '') {
            setHasTyped(false);
            setSuggestions([]);
            setResults([]);
            setSearchStatus('idle');
            return;
        }

        setHasTyped(true);
        const matched = SearchHelper(products, value);
        setSuggestions(matched);
    }

    const executeSearch = () => {
        if (searchText.trim() === '') {
            setResults([]);
            setSearchStatus('empty');
            return;
        }

        setIsLoading(true);
        setSuggestions([]);

        setTimeout(() => {
            const foundResults = SearchHelper(products, searchText);
            setResults(foundResults);

            if (foundResults.length === 0) {
                setSearchStatus('no-results');
            } else {
                setSearchStatus('success');
            }

            setIsLoading(false);
        }, 1000);
    }

    return {
        searchText,
        updateSearchText,
        executeSearch,
        suggestions,
        isLoading,
        searchStatus,
        results,
        hasTyped
    }
}