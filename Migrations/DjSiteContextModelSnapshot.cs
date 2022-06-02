﻿// <auto-generated />
using System;
using DJSite.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace DJSite.Migrations
{
    [DbContext(typeof(DjSiteContext))]
    partial class DjSiteContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.5")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("DJSite.Models.Schedule", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("id");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("CalendarId")
                        .IsRequired()
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)")
                        .HasColumnName("calendar_id");

                    b.Property<DateTime>("EndDate")
                        .HasColumnType("datetime")
                        .HasColumnName("end_date");

                    b.Property<bool>("IsAllDay")
                        .HasColumnType("bit")
                        .HasColumnName("isAllDay");

                    b.Property<DateTime>("StartDate")
                        .HasColumnType("datetime")
                        .HasColumnName("start_date");

                    b.HasKey("Id");

                    b.ToTable("Schedule", "dbo");
                });
#pragma warning restore 612, 618
        }
    }
}
