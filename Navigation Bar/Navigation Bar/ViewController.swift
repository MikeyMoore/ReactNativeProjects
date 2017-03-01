//
//  ViewController.swift
//  Navigation Bar
//
//  Created by Michael Moore on 2/28/17.
//  Copyright © 2017 Mikey Moore. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    @IBOutlet weak var numberLabel: UILabel!
    
    var time = 0

    var loggingTime = false

    var timer = Timer()

    @IBAction func playTimerButton(_ sender: Any) {

        if loggingTime == false {

            timer = Timer.scheduledTimer(timeInterval: 1, target: self, selector: #selector(result), userInfo: nil, repeats: true)
            
            loggingTime = true
        }

        print(loggingTime)
    }

    @IBAction func pauseTimerButton(_ sender: Any) {

        stopTimer()
    
    }

    @IBAction func resetTimerButton(_ sender: Any) {
        
        stopTimer()
        
        time = 0
        
        updateTimeLabel()
        
    }
    
    func stopTimer() {
    
        loggingTime = false
        
        print(loggingTime)
        
        timer.invalidate()
        
    }

    func updateTimeLabel() {

        numberLabel.text = "\(time)"
    }


    func result() {

        time += 1

        updateTimeLabel()
        
    }

    override func viewDidLoad() {
        super.viewDidLoad()

        updateTimeLabel()

    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}
