using System;
using System.Collections.Generic;

namespace SocialGame.Core.Models
{
    public class Badge
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string IconUrl { get; set; }
        public BadgeType Type { get; set; }
        public int RequiredXP { get; set; }
        public bool IsPremium { get; set; }
        
        // Navigation properties
        public virtual ICollection<User> Users { get; set; }
    }

    public enum BadgeType
    {
        Achievement,
        Milestone,
        Special,
        Event
    }
} 