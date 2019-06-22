import React, { Component } from 'react'

class Timeline extends Component {
    render() {
        return (
            <div className="container-fluid">
                <h1 className="text-center pt-5 text-white">Time Line</h1>
                <div className="timeline my-5" style={{fontSize:'18'}}>
                    <div className="container-timeline left text-white">
                        <div className="content">
                            <h2>2559</h2>
                            <p>เคยศึกษามัธยมปลายที่ โรงเรียนธนบุรีวรเทพีพลารักษ์ สายศิลป์คำนวณ</p>
                        </div>
                    </div>
                    <div className="container-timeline right text-white ">
                        <div className="content">
                            <h2>2560</h2>
                            <p>เข้ามาศึกษาที่มหางิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี</p><p>
                            </p></div>
                    </div>
                    <div className="container-timeline left text-white">
                        <div className="content">
                            <h2>2563 (ที่จะมาถึงอีกไม่ช้า)</h2>
                            <p>อยากที่จะเป็น นักพํฒนาเว็บแบบเต็มตัว จะพยายามศึกษาจนสามารถรับงานมาทำได้ครับ</p>
                        </div>
                    </div>
                    <div className="container-timeline right text-white">
                        <div className="content">
                            <h2>หลังจากนั้น...</h2>
                            <p>ผมตั้งเป้าว่าจะหาที่เข้าทำงานให้ได้ และ หาความรู้ให้มากที่สุดเเล้วจะได้ถ่ายทอดความรู้ให้คนที่อยากรู้</p>
                        </div>
                    </div>
                </div>
            </ div >
        )
    }
}

export default Timeline
