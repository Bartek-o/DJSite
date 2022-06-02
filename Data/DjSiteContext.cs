using System;
using DJSite.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace DJSite.Data
{
    public partial class DjSiteContext : DbContext
    {
        public DjSiteContext()
        {
        }

        public DjSiteContext(DbContextOptions<DjSiteContext> options) : base(options)
        {
        }

        public virtual DbSet<Schedule> Schedules { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Schedule>(entity =>
            {
                entity.ToTable("Schedule", "dbo");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.CalendarId)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("calendar_id");

                entity.Property(e => e.StartDate)
                    .HasColumnType("datetime")
                    .HasColumnName("start_date");

                entity.Property(e => e.EndDate)
                    .HasColumnType("datetime")
                    .HasColumnName("end_date");

                entity.Property(e => e.IsAllDay).HasColumnName("isAllDay");
            });
        }
    }
}
