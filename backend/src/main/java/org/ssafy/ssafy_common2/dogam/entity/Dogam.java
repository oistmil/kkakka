package org.ssafy.ssafy_common2.dogam.entity;

import jakarta.persistence.*;
import lombok.*;
import org.ssafy.ssafy_common2._common.entity.BaseTime;
import org.ssafy.ssafy_common2.itemshop.entity.ItemDealList;
import org.ssafy.ssafy_common2.user.entity.User;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Dogam extends BaseTime {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "dogam_image",nullable = false, length = 255)
    private String dogamImage;

    @Column(name = "dogam_title",nullable = false, length = 255)
    private String dogamTitle;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = true)
    private User user;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "dislike_id" )
    public DislikeDogam dislikeDogam;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "comment_id")
    public CommentDogam commentDogam;

    @Setter
    @OneToOne(mappedBy = "dogam", cascade = CascadeType.ALL)
    private ItemDealList itemDealList;

    public void addItemDealList(ItemDealList itemDealList) {
        this.itemDealList = itemDealList;
        if (itemDealList.getDogam() != this) {
            itemDealList.setDogam(this);
        }
    }

    @Builder
    private Dogam(String dogamImage, String dogamTitle, User user ) {
        this.dogamImage = dogamImage;
        this.dogamTitle = dogamTitle;
        this.user = user;
    }

    public static Dogam of(String dogamTitle, String imgUrl, User user ) {

        return builder()
                .dogamImage(imgUrl)
                .dogamTitle(dogamTitle)
                .user(user)
                .build();
    }
}
