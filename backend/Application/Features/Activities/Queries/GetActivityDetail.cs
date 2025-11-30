using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain.Entities;
using MediatR;
using Persistence.Contexts;

namespace Application.Features.Activities.Queries
{
    public class GetActivityDetail:IRequest<Activity>
    {
        public required string Id { get; set; }

        public class Handler(MyContext context) : IRequestHandler<GetActivityDetail,Activity>
        {
             public async Task<Activity> Handle(GetActivityDetail request, CancellationToken cancellationToken)
            {
                var activity= await context.Acitivities.FindAsync([request.Id],cancellationToken); 
                if(activity==null)  throw new ArgumentException("");
                return activity;
            }
        }
    }
}