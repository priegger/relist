import * as React from 'react'

export default class Counter extends React.Component<{}, { count: number }> {
    private intervalHandle: number | undefined

    public constructor(props: any) {
        super(props)
        this.state = { count: 0 }
    }

    public render(): JSX.Element {
        return (
            <span>
                {this.state.count} - {this.generateString1()} -{' '}
                {this.generateString2()}
            </span>
        )
    }

    public componentDidMount(): void {
        this.intervalHandle = window.setInterval(
            () =>
                this.setState(prevState => ({
                    count: prevState.count + 1,
                })),
            200
        )
    }

    public componentWillUnmount(): void {
        clearInterval(this.intervalHandle)
    }

    private generateString1(): string {
        return this.state.count.toExponential()
    }

    private generateString2 = () => {
        return this.state.count.toPrecision(18)
    }
}
