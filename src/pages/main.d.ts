interface EventHanler {
    (props: EventHanlerProps): void
}
interface EventHanlerProps {
    type: string, data?: any
}