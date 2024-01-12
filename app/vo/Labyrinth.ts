export interface LabyrinthData {
    /** 미궁 ID */
    labyrinthId: number;

    /** 미궁 제목 */
    labyrinthTitle: string;

    /** 미궁 설명 */
    labyrinthDescription: string;

    /** 미궁 태그 */
    labyrinthTags: LabyrithTag[];

    /** 미궁 섬네일 이미지 ID */
    thumbnailImageId: number | null; // Assuming it can be null

    /** 팀 제작 여부 */
    isTeam: boolean;

    /** 제작자 정보 */
    createUserInfo: UserInfo;

    /** 제작팀 정보 */
    createTeamInfo: TeamInfo;

    /** 별점 평가 여부 */
    isAbleEvaluation: boolean;

    /** 별점 */
    evalRate: number;

    /** 평가 가능 문제 풀이 횟수 */
    canEvaluateCount: number | null; // Assuming it can be null

    /** 난이도 평가 여부 */
    isAbleDifficulty: boolean;

    /** 백자평 작성 여부 */
    isAbleComment: boolean;

    /** 이벤트 미궁 여부 */
    isEvent: boolean;

    /** 미궁 완성 여부 */
    isComplete: boolean;

    /** 미궁 완성 일자 */
    completeDate: Date | null; // Assuming it can be null

    /** 미궁 공개 여부 */
    isPublic: boolean;

    /** 미궁 공개 날짜 */
    publicDate: Date | null; // Assuming it can be null

    /** 인증 미궁 여부 */
    isCert: boolean;

    /** 미궁 인증 일자 */
    certDate: Date | null; // Assuming it can be null

    /** 마지막 인증 일자 */
    lastCertDate: Date | null; // Assuming it can be null

    /** 문제 수 공개 여부 */
    isOpenQuestCount: boolean;

    /** 문제 수 */
    questCount: number | null; // Assuming it can be null

    /** 마지막 페이지 개수 공개 여부 */
    isOpenEndCount: boolean;

    /** 마지막 페이지 개수 */
    endCount: number | null; // Assuming it can be null

    /** BAD 엔딩 페이지 수 공개 여부 */
    isOpenBadEndCount: boolean;

    /** BAD 엔딩 페이지 수 */
    badEndCount: number | null; // Assuming it can be null

    /** 문제별 정답률 공개 여부 */
    isOpenAnswerRate: boolean;

    /** 문제별 해결 멤버 수 공개 여부 */
    isOpenQuestClear: boolean;

    /** 화면 우클릭 방지 여부 */
    isBlockPage: boolean;

    /** 회원 전용 미궁 여부 */
    isOnlyLogin: boolean;

    /** 이 주의 추천 미궁 동의 여부 */
    isOpenWeeklyRecommend: boolean;
}

interface LabyrithTag {

    /** 태그 ID */
    tagId: number;
    /** 태그명 */
    tagName: string;
}

interface UserInfo {

    uid: number;
    nickname: string;
    profileImagePath: string;
}

interface TeamInfo {

    teamId: number;
    teamName: string;
    teamProfileImagePath: string;
    teamMemberCount: number | 0;

}