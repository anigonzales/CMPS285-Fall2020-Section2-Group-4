using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Threading.Tasks;

namespace BerardAutomotive.Features.Login
{
    public class Login
    {
        [Required]
        public int Id { get; set; }

        [Required]
        public String Name { get; set; }

        [Required]
        public long PhoneNumber { get; set; }
        
        [Required]
        public String Email { get; set; }
    }
    public class LoginConfiguration : IEntityTypeConfiguration<Login>
    {
        public void Configure(EntityTypeBuilder<Login> builder)
        {

        }
    }
}
