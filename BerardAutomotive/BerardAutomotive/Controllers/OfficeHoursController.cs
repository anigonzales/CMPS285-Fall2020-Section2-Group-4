using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;
using BerardAutomotive.Data;
using BerardAutomotive.Features.OfficeHours;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Migrations.Internal;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;

namespace BerardAutomotive.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OfficeHoursController : ControllerBase
    {
        private readonly DataContext dataContext;
        private readonly MockCommanderRepo_Repository = new MockCommanderRepo();
        public OfficeHoursController(DataContext dataContext, )
        {
            this.dataContext = dataContext;
        }

        private static Expression<Func<OfficeHours, OfficeHoursDto>> migrate() 
        {
            return x => new OfficeHoursDto
            {
                Id = x.Id,
                Office_Hours = x.Office_Hours
            };
        }
        


//Office Hours: 8:00 A.M. - 5:30 P.M.(probably)
//Get OfficeHours 
    
    [HttpGet]
    public ActionResult <IEnumerable<Command>> GetAllCommands() 
    {
        var commandItem = _repository.GetAppCommands;
        return Ok(commandItem);
    }

    [HttpGet ("Id")]
    public ActionResult<Command> GetCommandById(int id)
    {
        var commandItem = _repository.GetCommandById;
        return Ok(commandItem);
    }

    
//Post OfficeHours
    public ActionResult<OfficeHoursDto> OfficeHours(int id)
        {
            var data = dataContext.Set<OfficeHours>().FirstOrDefault(x => x.Id == id);
            dataContext.Set<OfficeHours>().Remove(data);
            dataContext.SaveChanges();
            return Ok();
        }

    }
}
