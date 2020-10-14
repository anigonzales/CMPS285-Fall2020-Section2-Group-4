using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;
using BerardAutomotive.Data;
using BerardAutomotive.Data.Migrations;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Migrations.Internal;

namespace BerardAutomotive.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly DataContext dataContext;
        public LoginController(DataContext dataContext)
        {
            this.dataContext = dataContext;
        }

        private static Expression<Func<Login, LoginDto>> migrate()
        {
            return x => new LoginDto
            {
                Id = x.Id;
                Name = x.Name;
                PhoneNumber = x.PhoneNumber;
                Email = x.Email;
        };

        //Get Login
        private readonly MockCommanderRepo_Repository = new MockCommanderRepo();

        [HttpGet]
        public ActionResult<IEnumerable<Command>> GetAllCommands()
        {
            var commandItem = _repository.GetAppCommands;
            return OK(commandItem);
        }

        [HttpGet("Id")]
        public ActionResult<Command> GetCommandById(int id)
        {
            var commandItem = _repository.GetCommandById;
            return OK(commandItem);

        }

        //Post Login
        public ActionResult<LoginDto> Login(int id)
        {
            var data = dataContext Set<Entity>().FirstOnDefault(x => x.id == id);
            dataContext.Set<Entity>().Remove(data);
            dataContext.SaveChanges();
            return OK();
        }

    }
}
