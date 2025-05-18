using System;

namespace SocialGame.Core.Models
{
    public class Notification
    {
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public string Message { get; set; }
        public NotificationType Type { get; set; }
        public bool IsRead { get; set; }
        public DateTime CreatedAt { get; set; }
        public string RelatedEntityId { get; set; }
        
        // Navigation property
        public virtual User User { get; set; }
    }

    public enum NotificationType
    {
        Like,
        Comment,
        Follow,
        BadgeEarned,
        LevelUp,
        XPBattle,
        System
    }
} 