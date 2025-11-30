using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain.Entities;
using MediatR;
using Persistence.Contexts;

namespace Application.Features.Activities.Commands
{
    public class CreateActivityCommand:IRequest<string>
    {
        public Activity Activity { get; set; }
        public class Handler(MyContext context) : IRequestHandler<CreateActivityCommand,string>
        {
            public async Task<string> Handle(CreateActivityCommand request, CancellationToken cancellationToken)
            {
                context.Acitivities.Add(request.Activity );
                   await context.SaveChangesAsync();
                return request.Activity.Id.ToString();
            }
        }
    }
}