namespace TechnipWebApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class employeeschema : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Employees",
                c => new
                    {
                        EmployeeID = c.Int(nullable: false, identity: true),
                        EmployeeName = c.String(),
                        EmployeeDept = c.String(),
                        Status = c.String(),
                    })
                .PrimaryKey(t => t.EmployeeID);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Employees");
        }
    }
}
