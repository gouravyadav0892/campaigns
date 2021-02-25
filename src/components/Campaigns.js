import React, { Component } from 'react'
import './campaigns.scss'

import Table from './Table'

export default class Databook extends Component {

    constructor(props) {
        super(props);

        // 1610726561249
        // 1610926561249
        // 1611126561249
        // 1611326561249
        // 1611526561249
        // 1612326561249
        // 1612726561249
        // 1613126561249
        // 1613526561249
        // 1613726561249
        // 1614126561249
        // 1614526561249

        this.state = {
            tabs: ["Upcoming Campaigns", "Live Campaigns", "Past Campaigns"],
            tab: 0,
            data: [
              {
                "id": 1,
                "name": "Test Whatsapp",
                "region": "US",
                "createdOn": 1610326561249,
                "price": "Price info of Test Whatsapp",
                "csv": "Some CSV link for Whatsapp",
                "report": "Some report link for Whatsapp",
                "image_url":"/public/images/" 
              },
              {
                "id": 2,
                "name": "Super Jewels Quest",
                "region": "CA, FR",
                "createdOn": 1610526561249,
                "price": "Price info of Super Jewels Quest",
                "csv": "Some CSV link for Super Jewels Quest",
                "report": "Some report link for Super Jewels Ques",
                "image_url":"Some image url of the campaign"
              },
              {
                "id": 3,
                "name": "Mole Slayer",
                "region": "FR",
                "createdOn": 1612126561249,
                "price": "Price info of Mole Slayer",
                "csv": "Some CSV link for Mole Slayer",
                "report": "Some report link for Mole Slayer",
                "image_url":"Some image url of the campaign"
              },
              {
                "id": 4,
                "name": "Mancala Mix",
                "region": "JP",
                "createdOn": 1611726561249,
                "price": "Price info of Mancala Mix",
                "csv": "Some CSV link for Mancala Mix",
                "report": "Some report link for Mancala Mix",
                "image_url":"Some image url of the campaign"
              },
              {
                "id": 5,
                "name": "Test Whatsapp",
                "region": "US",
                "createdOn": 1612526561249,
                "price": "Price info of Test Whatsapp",
                "csv": "Some CSV link for Whatsapp",
                "report": "Some report link for Whatsapp",
                "image_url":"/public/images/" 
              },
              {
                "id": 6,
                "name": "Super Jewels Quest",
                "region": "CA, FR",
                "createdOn": 1613326561249,
                "price": "Price info of Super Jewels Quest",
                "csv": "Some CSV link for Super Jewels Quest",
                "report": "Some report link for Super Jewels Ques",
                "image_url":"Some image url of the campaign"
              },
              {
                "id": 7,
                "name": "Mole Slayer",
                "region": "FR",
                "createdOn": 1613926561249,
                "price": "Price info of Mole Slayer",
                "csv": "Some CSV link for Mole Slayer",
                "report": "Some report link for Mole Slayer",
                "image_url":"Some image url of the campaign"
              },
              {
                "id": 8,
                "name": "Mancala Mix",
                "region": "JP",
                "createdOn": 1614326561249,
                "price": "Price info of Mancala Mix",
                "csv": "Some CSV link for Mancala Mix",
                "report": "Some report link for Mancala Mix",
                "image_url":"Some image url of the campaign"
              },
              {
                "id": 9,
                "name": "Test Whatsapp",
                "region": "US",
                "createdOn": 1612926561249,
                "price": "Price info of Test Whatsapp",
                "csv": "Some CSV link for Whatsapp",
                "report": "Some report link for Whatsapp",
                "image_url":"/public/images/" 
              },
              {
                "id": 10,
                "name": "Super Jewels Quest",
                "region": "CA, FR",
                "createdOn": 1614926561249,
                "price": "Price info of Super Jewels Quest",
                "csv": "Some CSV link for Super Jewels Quest",
                "report": "Some report link for Super Jewels Ques",
                "image_url":"Some image url of the campaign"
              },
              {
                "id": 11,
                "name": "Mole Slayer",
                "region": "FR",
                "createdOn": 1611926561249,
                "price": "Price info of Mole Slayer",
                "csv": "Some CSV link for Mole Slayer",
                "report": "Some report link for Mole Slayer",
                "image_url":"Some image url of the campaign"
              },
              {
                "id": 12,
                "name": "Mancala Mix",
                "region": "JP",
                "createdOn": 1614726561249,
                "price": "Price info of Mancala Mix",
                "csv": "Some CSV link for Mancala Mix",
                "report": "Some report link for Mancala Mix",
                "image_url":"Some image url of the campaign"
              }
            ]
        }
    }

    viewPricing = (item) => {
      this.setState({
        pricingModal: item
      })

    }

    scheduleDate = (item) => {
      this.setState({
        schedulingDate: item
      })
    }

    scheduleNewDate = () => {
      var newDate = new Date(document.getElementById("schedule_date").value).getTime()
      if(newDate) {
        debugger
        this.state.schedulingDate.createdOn = newDate
      }
      this.setState({
        schedulingDate: null
      })
    }



    convertToTable = (data) => {
        var response = {
            headers: [],
            column_type: [],
            rows: []
        };
        response.headers = ['Date', 'Campaign', 'View', 'Actions', '', ''];
        response.column_type = ['date', 'desc', 'link', 'link', 'link', 'link'];

        data.forEach((element, index) => {
            var { name, region, createdOn, price, csv, report, image_url } = element;
            var timeDiff = parseInt((new Date() - createdOn) / (60 * 60 * 24 * 1000))
            response.rows.push([
                [createdOn, Math.abs(timeDiff) + " Days " + (timeDiff > 0 ? "Ago": "Ahead")], 
                ["/images/" + (element.id % 8) + ".png", [name, region]], 
                ["/images/Price.png", "View Pricing", this.viewPricing.bind(this, element) ], 
                ["/images/file.png", "CSV", csv ], 
                ["/images/statistics-report.png", "Report",  null ],
                ["/images/calendar.png", "Schedule Again", this.scheduleDate.bind(this, element)]
            ])
        });
        // console.log(files_data)
        return response;
    }

    setTab = (tab) => {
        this.setState({
            tab: tab
        })
    }

    render() {

            var data = this.state.data.filter(item => {
                var timediff = parseInt((new Date() - item.createdOn) / (60 * 60 * 24 * 1000))
                switch(this.state.tab) {
                    case 0:
                        return timediff < 0
                    case 1:
                        return timediff == 0
                    case 2:
                        return timediff > 0
                }
            }).sort((a,b) => {
              return a.createdOn - b.createdOn
            })
        
            return (
                <>
                {/* Header */}
                    <div className="header">
                        <div className="container">
                            <div className="title">
                              <img src="images/image1.png" />
                            </div>
                        </div>
                        
                    </div>
                   <div className="main-content databook container">
                        <h1 className="title">Manage Campaigns</h1>

                        <div className="navbar">
                            {this.state.tabs.map((item, index) => {
                                return <h4 onClick={this.setTab.bind(this, index)} className={"nav-item " + (this.state.tab == index ? "active": "") } >{item}</h4>
                            })}
                        </div>

                        <Table id="datasetFiles_table" data={this.convertToTable(data)} />
                        
                        {/* Pricing Modal */}
                        {
                          this.state.pricingModal ? 
                          <div className="overlay">
                            <div className="overlay-box">
                              <div className="header-1">
                                <div className="img_icon"><img src={"/images/" + (this.state.pricingModal.id % 8) + ".png"} /></div>
                                  <div className="desc">
                                    <div className="desc_0">{this.state.pricingModal.name}</div>
                                    <div className="desc_1">{this.state.pricingModal.region}</div>
                                  </div>
                              </div>
                              <div className="pricing">Pricing</div>
                              <div className="pricing-values">
                                <div className="key">1 Week - 1 Month</div>
                                <div className="value">$ 100</div>
                              </div>
                              <div className="pricing-values">
                                <div className="key">6 Months</div>
                                <div className="value">$ 500</div>
                              </div>
                              <div className="pricing-values">
                                <div className="key">1 Year</div>
                                <div className="value">$ 900</div>
                              </div>
                              <div className="close-btn">
                                <div className="btn btn-default" onClick={()=> {this.setState({pricingModal: null})}} >Close</div>
                              </div>
                            </div>
                          </div>

                          : null

                        }
                        {/* Pricing Modal */}
                        {
                          this.state.schedulingDate ? 
                          <div className="overlay">
                            <div className="overlay-box">
                              <div className="header-1">
                                <div className="img_icon"><img src={"/images/" + (this.state.schedulingDate.id % 8) + ".png"} /></div>
                                  <div className="desc">
                                    <div className="desc_0">{this.state.schedulingDate.name}</div>
                                    <div className="desc_1">{this.state.schedulingDate.region}</div>
                                  </div>
                              </div>
                              <div className="pricing">Schedule Date</div>
                              <div className="pricing-values text-center">
                                <input id="schedule_date" type="date" defaultValue={this.state.schedulingDate.createdOn}></input>
                              </div>
                              <div className="close-btn">
                                <div className="btn btn-primary" onClick={this.scheduleNewDate} >Schedule</div>
                                <div className="btn btn-default" onClick={()=> {this.setState({schedulingDate: null})}} >Close</div>
                              </div>
                            </div>
                          </div>

                          : null

                        }
                        
                                                 
                    </div>
        
                    
                </>
            )
     
    }
}