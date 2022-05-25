import { React, useState, useCallback } from "react";

const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(
    async (
      url,
      method = "GET",
      body = null,
      headers = { "Content-Type": "application/json" }
    ) => {
      setLoading(true);
      try {
        const respone = await fetch(url, { method, body, headers });
        if (!respone.ok) {
          throw new Error(`Could not feth ${url}, status: ${respone.status}`);
        }
        const data = await respone.json();
        setLoading(false);
        return data;
      } catch (e) {
        setLoading(false);
        setError(true);
        throw e;
      }
    }
  );
  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return { loading, error, request, clearError };
};

export default useHttp;
