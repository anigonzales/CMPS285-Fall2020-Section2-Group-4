using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using BerardAutomotive.Data;
using BerardAutomotive.Features.Appointment;
using Microsoft.AspNetCore.Cors.Infrastructure;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Migrations.Internal;

namespace BerardAutomotive.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AppointmentController : ControllerBase
    {
        private readonly DataContext dataContext;
        public AppointmentController(DataContext dataContext) 
        {
            this.dataContext = dataContext;
        }

        private static Expression<Func<Appointment, AppointmentDto>> migrate()
        {
            return x => new AppointmentDto
            {
                Id = x.Id,
                Name = x.Name,
                Phone = x.Phone,
                Time = x.Time,
                Note = x.Note,
            };
        }
        [HttpGet]
        public IEnumerable<AppointmentDto> GetAll()
        {
            return dataContext.Set<Appointment>().Select(migrate()).ToList();
        }

        [HttpPost]
        public ActionResult <AppointmentDto> Create(AppointmentDto targetValue)
        {
            var data = dataContext.Set<Appointment>().Add(new Appointment
            {
                Id = targetValue.Id,
                Name = targetValue.Name,
                Phone = targetValue.Phone,
                Time = targetValue.Time,
                Note = targetValue.Note,
            });
            targetValue.Id = data.Entity.Id;
            dataContext.SaveChanges();
            return Created(string.Empty, targetValue);
        }
    }
}
