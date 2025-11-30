using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence.Contexts;

namespace Application.Features.Activities.Queries
{
    public class GetActivities:IRequest<List<Activity>>
    {
        public class Handler(MyContext context ) : IRequestHandler<GetActivities, List<Activity>>
        {
            public async Task<List<Activity>> Handle(GetActivities request, CancellationToken cancellationToken)
            {
               return await context.Acitivities.ToListAsync();
            }
        }
    }
}