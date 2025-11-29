using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence.Contexts;

namespace Api.Controllers
{
       public class ActivityController (MyContext context): BaseApiController
    {
        [HttpGet]
        public async Task<IActionResult> Index()
        {
            return Ok(await context.Acitivities.ToListAsync()); 
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(string id)
        {
            var acttivity= await context.Acitivities.FindAsync( id);
            if (acttivity == null) return NotFound();
            return Ok(acttivity);
        }
    }
}