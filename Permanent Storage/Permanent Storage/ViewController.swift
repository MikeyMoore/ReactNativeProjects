//
//  ViewController.swift
//  Permanent Storage
//
//  Created by Michael Moore on 3/2/17.
//  Copyright © 2017 Mikey Moore. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    @IBOutlet weak var progressLabel: UILabel!
    
    @IBAction func addDay(_ sender: Any) {
        
        let progress = UserDefaults.standard.object(forKey: "progress")!
        
        let skillCount = (progress as! Int) + 1
        
        UserDefaults.standard.set(skillCount, forKey: "progress")
        
        updateSkillLabel(totalCount: skillCount)
        
//        print("progress")
//        
//        print(progress)
        
        
    }
    
    func updateSkillLabel(totalCount: Int) {
        progressLabel.text! = "\(totalCount) times trained"
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        
//        UserDefaults.standard.set(0, forKey: "progress")
        
        let progress = UserDefaults.standard.object(forKey: "progress")!
        
        updateSkillLabel(totalCount: progress as! Int)

        
        
        
        
//        let arr = [1,2,3,4]
//        
//        UserDefaults.standard.set(arr, forKey: "array")
//        
//        let returnedArray = UserDefaults.standard.object(forKey: "array")! as! NSArray
//        
//        for x in returnedArray {
//        
//            print(x)
//        
//        }
        
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

