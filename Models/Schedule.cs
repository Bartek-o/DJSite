using System;
using System.Collections.Generic;

#nullable disable

namespace DJSite.Models
{
    public partial class Schedule
    {
        public int Id { get; set; }
        public string CalendarId { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public bool IsAllDay { get; set; }
    }
}
