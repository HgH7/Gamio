using System;
using System.Collections.Generic;

namespace SocialGame.Core.Models
{
    public class User
    {
        public Guid Id { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string PasswordHash { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string ProfilePicture { get; set; }
        public bool IsPrivate { get; set; }
        public int XP { get; set; }
        public int Level { get; set; }
        public bool IsPremium { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime? LastLoginAt { get; set; }
        
        // Navigation properties
        public virtual ICollection<Post> Posts { get; set; }
        public virtual ICollection<Badge> Badges { get; set; }
        public virtual ICollection<Notification> Notifications { get; set; }
    }
} 