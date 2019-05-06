import React from 'react';
import '../../../css/dashboard.css';
import Column from './column';
import {columnsData2, columnsData} from './columnsData';
import $ from 'jquery';
import generate from "@babel/generator";

class Dashboard extends React.Component {

    constructor(props) {
        super(props);

        this.onMouseDown = this.onMouseDown.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onMouseUp = this.onMouseUp.bind(this);
        this.onMouseOut = this.onMouseOut.bind(this);
        this.onclick = this.onclick.bind(this);

        this.dragging = false;
        this.xPrevPos = 0;

        this.state = {
            columns_data: columnsData
        };
    }

    disableMouseSelect() {
        let board = $('.Board');

        board.css('user-select', 'none');
    }

    onMouseDown(e) {
        console.log('started dragging');
        this.dragging = true;
        this.xPrevPos = e.pageX;
        this.disableMouseSelect();
    }

    onMouseMove(e) {
        if (this.dragging) {
            console.log('dragging');
            let board = $('.Board');
            let xMovePos = e.pageX;
            let difference = xMovePos - this.xPrevPos;
            let scrollPosCoords = board.scrollLeft() - difference;
            $('.Board').css('cursor', 'grab');

            board.scrollLeft(scrollPosCoords);
            this.disableMouseSelect();

            if (difference !== 0) {
                this.xPrevPos = xMovePos;
                console.log(this.xPrevPos);
            }
        }
    }

    onMouseOut(e) {
        this.dragging = false;
        this.xPrevPos = 0;
        $('.Board').css('cursor', 'default');
    }

    onMouseUp(e) {
        this.dragging = false;
        this.xPrevPos = 0;
        console.log('stopped dragging');
        $('.Board').css('cursor', 'default');
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    onclick() {
        this.setState({
            columns_data: columnsData2,
        });
    }

    render() {

        const generatedColumns = this.state.columns_data.map((value) => (
            <Column content={value.content} heading={value.heading} />
        ));

        return (
            <div
                onMouseDown={this.onMouseDown}
                onMouseMove={this.onMouseMove}
                onMouseUp={this.onMouseUp}
                onMouseOut={this.onMouseOut}
                onClick={this.onclick}
                className="Board">
                {generatedColumns}
            </div>
        );
    }

}

export default Dashboard;