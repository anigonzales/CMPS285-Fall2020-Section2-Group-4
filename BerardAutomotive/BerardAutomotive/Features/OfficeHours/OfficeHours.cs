using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BerardAutomotive.Features.OfficeHours
{
    public class OfficeHours
    {
        public DateTimeOffset Office_Hours { get; set; }
        public int Id { get; set; }
    }

    }
}
