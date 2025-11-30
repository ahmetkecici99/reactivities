using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Domain.Entities;
using MediatR;
using Persistence.Contexts;

namespace Application.Features.Activities.Commands
{
    public class EditActivityCommand:IRequest

    {

        public Activity Activity { get; set; }

        public class Handler(MyContext context,IMapper mapper) : IRequestHandler<EditActivityCommand>
        {
            public async Task Handle(EditActivityCommand request, CancellationToken cancellationToken)
            {
             var activity = await context.Acitivities.FindAsync([request.Activity.Id], cancellationToken)
             ??throw new Exception("");

                mapper.Map(request.Activity,activity);
                await context.SaveChangesAsync();
            }
        }

    }
}