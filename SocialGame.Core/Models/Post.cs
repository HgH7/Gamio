using System;
using System.Collections.Generic;

namespace SocialGame.Core.Models
{
    public class Post
    {
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public string Content { get; set; }
        public string MediaUrl { get; set; }
        public MediaType MediaType { get; set; }
        public int XP { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
        
        // Navigation properties
        public virtual User User { get; set; }
        public virtual ICollection<Comment> Comments { get; set; }
        public virtual ICollection<Like> Likes { get; set; }
    }

    public enum MediaType
    {
        None,
        Image,
        Video
    }
} 