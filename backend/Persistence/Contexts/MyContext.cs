using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Persistence.Contexts
{
    public class MyContext(DbContextOptions options):DbContext(options)
    {
        public DbSet<Activity> Acitivities { get; set; }
    }
}