import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} |  Jujutsu Club for Summer camps `;
    }, [title])
};

export default useTitle;