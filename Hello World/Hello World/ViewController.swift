//
//  ViewController.swift
//  Hello World
//
//  Created by Michael Moore on 2/26/17.
//  Copyright © 2017 Mikey Moore. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    @IBOutlet weak var label: UILabel!
    
    @IBOutlet weak var textField: UITextField!
    
    @IBAction func submit(_ sender: Any) {
        
        print("tapped")
        
        label.text = textField.text
        
    }
    override func viewDidLoad() {
        super.viewDidLoad()
        
        print("Hello World")
        
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

