import { useEffect, useRef } from 'react'

interface UseScrollAnimationProps {
    threshold?: number
    triggerOnce?: boolean
}

export function useScrollAnimation({
    threshold = 0.1,
    triggerOnce = true
}: UseScrollAnimationProps = {}) {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const element = ref.current
        if (!element) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    element.classList.add('show')
                    if (triggerOnce) {
                        observer.unobserve(element)
                    }
                } else if (!triggerOnce) {
                    element.classList.remove('show')
                }
            },
            { threshold }
        )

        observer.observe(element)

        return () => {
            if (element) {
                observer.unobserve(element)
            }
        }
    }, [threshold, triggerOnce])

    return ref
}
