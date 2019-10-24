using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace TechnipWebApi.Models
{
    public class Employee
    {
        [Key]
        public int EmployeeID { get; set; }
     
        public string EmployeeName { get; set; }
      
        public string EmployeeDept { get; set; }
      
        public string Status { get; set; }

    }

}