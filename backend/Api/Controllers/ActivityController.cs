using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Features.Activities.Commands;
using Application.Features.Activities.Queries;
using Domain.Entities;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence.Contexts;

namespace Api.Controllers
{
       public class ActivityController (MyContext context,IMediator mediator): BaseApiController
    {
        [HttpGet]
        public async Task<IActionResult> Index()
        {
          //  return Ok(await context.Acitivities.ToListAsync()); 
          return Ok(await mediator.Send(new GetActivities()));
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(string id)
        {
            // var acttivity= await context.Acitivities.FindAsync( id);
            // if (acttivity == null) return NotFound();
            // return Ok(acttivity);

            return Ok(await mediator.Send(new GetActivityDetail{Id=id}));
        
        }
        [HttpPost]
        public async Task<IActionResult> CreateActivity(Activity activity)
        {

        var id= await Mediator.Send(new CreateActivityCommand{Activity=activity});
            return Ok(id);
        }
        [HttpPut]
        public async Task<IActionResult> EditActivity(Activity activity)
        {

          await Mediator.Send(new EditActivityCommand{Activity=activity});
          
            return Ok( await context.Acitivities.FindAsync(activity.Id));
        }
    }
}