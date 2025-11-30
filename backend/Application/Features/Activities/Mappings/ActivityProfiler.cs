using System;
using System.Collections.Generic;

using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Domain.Entities;

namespace Application.Features.Activities.Mappings
{
    public class ActivityProfiler:Profile
    {
      public ActivityProfiler()
      {
        CreateMap<Activity,Activity>();
      }   
    }
}