using BerardAutomotive.Models;
using IdentityServer4.EntityFramework.Options;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BerardAutomotive.Features.Service;
using BerardAutomotive.Data.Migrations;

namespace BerardAutomotive.Data
{
    public class DataContext : ApiAuthorizationDbContext<ApplicationUser>
    {
        public DataContext(
            DbContextOptions options,
            IOptions<OperationalStoreOptions> operationalStoreOptions) : base(options, operationalStoreOptions)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfigurationsFromAssembly(typeof(DataContext).Assembly);
        }

        public DbSet<BerardAutomotive.Features.Service.Service> Service { get; set; }

        public DbSet<OfficeHours> OfficeHours { get; set; }

        public DbSet<Login> Login { get; set;}
    }
}
