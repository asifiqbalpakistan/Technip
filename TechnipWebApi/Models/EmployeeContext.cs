using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace TechnipWebApi.Models
{
    public class EmployeeContext:DbContext
    {
        public EmployeeContext() : base("EmployeeDB")
            { }

        public virtual DbSet<Employee> Employees { get; set; }
    }
}