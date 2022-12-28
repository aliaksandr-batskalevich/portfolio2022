import React, {useRef} from "react";
import s from "../Skill.module.scss";

type DiagramPropsType = {
    radius: number
    lineWidth: number
    lineColor: string
    underlineColor: string
    value: number

    setIsFinish: (value: boolean) => void
}

export class Diagram extends React.Component<DiagramPropsType, any> {

    width = this.props.radius * 2 + this.props.lineWidth;
    height = this.props.radius * 2 + this.props.lineWidth;

    componentDidMount() {
        this.diagramRender();
    }

    diagramRender() {
        let value = this.props.value < 0 ? 0 : this.props.value > 100 ? 100 : this.props.value;
        let startDeg = -1 / 2 * Math.PI;
        let stepLength = 2 * Math.PI / 100;
        let width = this.width;
        let height = this.height;
        let lineColor = this.props.lineColor;
        let underlineColor = this.props.underlineColor;
        let lineWidth = this.props.lineWidth;
        let arcRadius = this.props.radius;
        let centerX = width / 2;
        let centerY = height / 2;

        // get canvas context
        // @ts-ignore
        let ctx = this.refs.canvas.getContext('2d');

        async function renderer(percents: number, timeout: number, color: string) {

            for (let i = 0; i < percents; i++) {

                let startStep = startDeg + stepLength * i;
                let endStep = startDeg + stepLength * (i + 1);

                // timeout
                let pr = await new Promise((res) => {
                    setTimeout(res, timeout)
                });

                ctx.strokeStyle = color;
                ctx.lineWidth = lineWidth;
                ctx.beginPath();
                ctx.arc(centerX, centerY, arcRadius, startStep, endStep, false);
                ctx.stroke();
            }
        }

        renderer(100, 10, underlineColor)
            .then(() => renderer(value, 10, lineColor))
            .then((res) => {
                this.props.setIsFinish(true);
            });
    }

    render() {
        return (
            <div className={s.skillWrapper}>
                <canvas
                    ref={'canvas'}
                    height={this.height}
                    width={this.width}
                />
            </div>
        )
    }
}