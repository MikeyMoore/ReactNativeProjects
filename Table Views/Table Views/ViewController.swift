//
//  ViewController.swift
//  Table Views
//
//  Created by Michael Moore on 3/1/17.
//  Copyright © 2017 Mikey Moore. All rights reserved.
//

import UIKit

class ViewController: UIViewController, UITableViewDelegate, UITableViewDataSource {

    @IBOutlet weak var table: UITableView!
    
    @IBOutlet weak var sliderValue: UISlider!
    
    @IBAction func sliderMoved(_ sender: Any) {
        
        table.reloadData()
        
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        
        return 20
        
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
    
        let cell = UITableViewCell (style: UITableViewCellStyle.default, reuseIdentifier: "Cell")
        
        let timesTable = Int(sliderValue.value * 20)
        
        cell.textLabel?.text = String(timesTable * (indexPath.row + 1))
        
        return cell
    
    }
    
//    func tableView(tableView: UITableView, cellForRowAtIndexPath indexPath: NSIndexPath) -> UITableViewCell {
//    
//        let cell = UITableViewCell (style: UITableViewCellStyle.default, reuseIdentifier: "Cell")
//        
//        cell.textLabel?.text = "Test"
//        
//        return cell
//    
//    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

