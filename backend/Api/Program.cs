using Microsoft.EntityFrameworkCore;
using Persistence.Contexts;
using Persistence.Seed;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();

builder.Services.AddDbContext<MyContext>(opt=> opt.UseSqlite(builder.Configuration.GetConnectionString("Default")));
builder.Services.AddCors();
var app = builder.Build();

// Configure the HTTP request pipeline.
app.UseHttpsRedirection();

app.UseCors(x=>x.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
app.MapControllers();


using var scope=app.Services.CreateScope();
var services = scope.ServiceProvider;
try
{
    var context=services.GetRequiredService<MyContext>();
    await context.Database.MigrateAsync();
     await    SeedData.SeedActivities(context);

}
catch (System.Exception ex )
{
 var logger=services.GetRequiredService<ILogger<Program>>();
 logger.LogError(ex,"An error occured in migration");

}
app.Run();
