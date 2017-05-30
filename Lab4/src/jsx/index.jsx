let Main = React.createClass ({
   render: function() {
      return (
         <div className="container-fluid">
             <Form/>
             <Canvas/>
         </div>
      );
   }
});

let Form = React.createClass ({
    render() {
        return (
            <div className="shape col-xs-12 col-sm-5 col-md-4">
                <form id="form">
                    <Shapes/>
                    <Circle/>
                    <Triangle/>
                    <Rectangle/>
                    <Info/>
                </form>
            </div>
        );
    }
});

let Shapes  = React.createClass ({
    render() {
        return (
            <div>
                <div classNameName="form-group">
                    <label htmlFor="shape-type">Choose shape:</label>
                    <select className="shape-type form-control" id="shape-type">
                        <option value="choose_shape" disabled selected>Choose shape</option>
                        <option value="circle">Circle</option>
                        <option value="rectangle">Rectangle</option>
                        <option value="triangle">Triangle</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="fill-color">Fill color:</label>
                    <input type="text" id="fill-color" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="border-color">Border color:</label>
                    <input type="text" id="border-color" className="form-control"/>
                </div>
            </div>
        )
    }
});

let Circle = React.createClass ({
    render() {
        return (
                <div id="circle" className="not-visible">
                    <div className="form-group">
                        <label htmlFor="radius">Radius:</label>
                        <input type="text" id="radius" className="form-control"/>
                    </div>
                    <div classNameName="form-group">
                        <label htmlFor="center-x">CenterX:</label>
                        <input type="text" id="center-x" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="center-y">CenterY:</label>
                        <input type="text" id="center-y" className="form-control"/>
                    </div>
                </div>
        )
    }
});

let Triangle = React.createClass ({
    render() {
        return (
                <div id="triangle" className="not-visible">
                    <div className="form-group">
                        <label htmlFor="triangle-x1">X1:</label>
                        <input type="text" id="triangle-x1" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="triangle-y1">Y1:</label>
                        <input type="text" id="triangle-y1" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="triangle-x2">X2:</label>
                        <input type="text" id="triangle-x2" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="triangle-y2">Y2:</label>
                        <input type="text" id="triangle-y2" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="triangle-x3">X3:</label>
                        <input type="text" id="triangle-x3" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="triangle-y3">Y3:</label>
                        <input type="text" id="triangle-y3" className="form-control"/>
                    </div>
                </div>
        )
    }
});

let Rectangle = React.createClass ({
    render() {
        return (
                <div id="rectangle" className="not-visible">
                    <div className="form-group">
                        <label htmlFor="rect-x1">X1:</label>
                        <input type="text" id="rect-x1" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="rect-y1">Y1:</label>
                        <input type="text" id="rect-y1" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="rect-x2">X2:</label>
                        <input type="text" id="rect-x2" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="rect-y2">Y2:</label>
                        <input type="text" id="rect-y2" className="form-control"/>
                    </div>  
                </div>
        )
    }
});

let Info = React.createClass ({
    render() {
        return (
            <div>
                <div id="perimeter" className="perimeter"></div>
                <div id="area" className="area"></div>
            </div>
        );
    }
});

let Canvas = React.createClass ({
    render() {
        return (
            <canvas id="canvas" className="col-xs-12 col-sm-7 col-md-8"></canvas>
        );
    }
});

ReactDOM.render(<Main/>, document.getElementById('main'));