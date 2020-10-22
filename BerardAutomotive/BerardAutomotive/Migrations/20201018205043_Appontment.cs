using Microsoft.EntityFrameworkCore.Migrations;

namespace BerardAutomotive.Migrations
{
    public partial class Appontment : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Phone",
                table: "Appointments",
                nullable: true,
                oldClrType: typeof(long),
                oldType: "bigint");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<long>(
                name: "Phone",
                table: "Appointments",
                type: "bigint",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);
        }
    }
}
