package org.ssafy.ssafy_common2.user.entity;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.ssafy.ssafy_common2._common.entity.BaseTime;
import org.ssafy.ssafy_common2.itemshop.entity.ItemDealList;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Alias extends BaseTime {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
}
