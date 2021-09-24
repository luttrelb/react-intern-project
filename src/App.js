import React, {Component} from 'react';
import {Helmet}

class App extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.async = true;
    script.src = "/src/script.js";
    this.div.appendChild(script);
  }
  render() {
    return (
      <div className="App" ref={el => (this.div = el)}>
        <h1>Hello React</h1>
        {const video = document.getElementById('video')
          const videoClick = document.querySelector('video')

    Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
      ]).then(startVideo)

    function startVideo() {
        navigator.getUserMedia(
            { video: {} },
            stream => video.srcObject = stream,
            err => console.error(err)
        )
    }

    video.addEventListener('play', () => {
        const canvas = faceapi.createCanvasFromMedia(video)
        document.body.append(canvas)
        const displaySize = { width: video.width, height: video.height }
        faceapi.matchDimensions(canvas, displaySize)
        var initial_x = 0
        var initial_y = 0
        setInterval(async () => {
          const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())   
          const resizedDetections = faceapi.resizeResults(detections, displaySize)
          for (let i = 0; i < resizedDetections.length; i++){
            const resized_x = resizedDetections[i]._box._x
            const resized_y = resizedDetections[i]._box._y
            resizedDetections[i]._score = null
            if ((Math.abs(initial_x - resized_x) > 20) || (Math.abs(initial_y - resized_y) > 20)){
              canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
              faceapi.draw.drawDetections(canvas, resizedDetections)
              initial_x = resized_x
              initial_y = resized_y
            }
          }
        }, 30)
      })}
    </div>
    )
  }
}
